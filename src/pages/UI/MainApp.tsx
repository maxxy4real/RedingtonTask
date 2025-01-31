import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Images, ImageType, ImageKeywords } from "./ImageConsts";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Header from "./Header";
import dayjs, { Dayjs } from "dayjs";

export const MainApp: FC = () => {
  const [listOfImages, setListOfImages] = useState<ImageType[]>(Images);
  const [search, setSearch] = useState<string>("");
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  useEffect(() => {
    setListOfImages(
      Images.filter((image) => {
        return (
          image.Title.toLowerCase().includes(search.toLowerCase()) &&
          (!startDate || dayjs(image.UploadDate).isAfter(startDate)) &&
          (!endDate || dayjs(image.UploadDate).isBefore(endDate)) &&
          (selectedNames.length === 0 ||
            selectedNames.every((name) => image.Keywords.includes(name)))
        );
      })
    );
  }, [search, startDate, endDate, selectedNames]);

  return (
    <>
      <Header>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          paddingBottom={"20px"}
        >
          <Input
            id="input"
            placeholder="Title"
            onChange={(input) => setSearch(input.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newDate) => setStartDate(newDate)}
              />
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={(newDate) => setEndDate(newDate)}
              />
            </Box>
          </LocalizationProvider>
          <Select
            multiple
            value={selectedNames}
            onChange={(e) => setSelectedNames(e.target.value as string[])}
            input={<OutlinedInput label="Keywords" />}
          >
            {ImageKeywords.map((keyword) => (
              <MenuItem key={keyword} value={keyword}>
                {keyword}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Header>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <ImageList cols={4} gap={30}>
          {listOfImages.map((item) => {
            return (
              <ImageListItem key={item.Id}>
                <img
                  srcSet={`${item.Url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.Url}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.Keywords.join(", ")}
                  loading="lazy"
                />
                <ImageListItemBar
                  position="below"
                  title={item.Title}
                  subtitle={`keywords: ${item.Keywords}`}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    </>
  );
};
