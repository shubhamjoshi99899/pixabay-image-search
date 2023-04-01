import { Container, Typography, Grid, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { getSearchedImages } from "../utils/apiCalls";
import InfiniteScroll from "react-infinite-scroll-component";
import CustomCard from "./GridItem";
import PageForm from "./Form";
import { useDebounce } from "../hooks/useDebounce";
import CircularLoaderComponent from "./Skeleton";
import { replaceSpacesWithPlus } from "../utils/helperFunctions";
const LandingPage: React.FC = () => {
  const [images, setImages] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      q: "",
      category: "",
      orientation: "",
      image_type: "",
    },
    onSubmit: (values: any) => {
      handleSubmit(values);
    },
  });
  const searchQuery = useDebounce(formik.values.q, 1000);

  const handleSubmit = (values: any) => {
    setImages([]);
    fetchImages();
  };

  const fetchImages = () => {
    setLoading(true);
    getSearchedImages({
      key: "34945107-05d11d02f70a3e3c7d4bce489",
      q: replaceSpacesWithPlus(searchQuery),
      page: 1,
      per_page: 20,
      orientation: formik.values.orientation,
      image_type: formik.values.image_type,
      category: formik.values.category,
    }).then((res: any) => {
      if (
        formik.values.q?.length > 0 ||
        formik.values.orientation?.length > 0 ||
        formik.values.image_type?.length > 0 ||
        formik.values.category?.length > 0
      ) {
        setImages([...res.hits]);
        setImages([...res.hits]);
        setLoading(false);
      } else {
        setImages([...images, ...res.hits]);
        setLoading(false);
      }
    });
  };

  const handleReset = () => {
    setImages([]);
    formik.resetForm();
  };

  useEffect(() => {
    fetchImages();
  }, [searchQuery, formik.values]);

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "flex-start",
          height: "100vh",
          mt: 20,
        }}
      >
        <Box>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            sx={{ verticalAlign: "middle" }}
          >
            Welcome to Image searching app!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            This is a simple example of implementation of Pixabay API using
            React, Typescript and MaterialUi.
          </Typography>
          <PageForm handleReset={handleReset} formik={formik} />
        </Box>

        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Grid container spacing={4} mt={4}>
            {images?.map((image: any) => (
              <Grid item xs={4} key={image.id}>
                <CustomCard image={image} />
                <Typography title={image.tags} />
              </Grid>
            ))}
            <CircularLoaderComponent loading={loading} />
          </Grid>
        </InfiniteScroll>
      </Box>
    </Container>
  );
};

export default LandingPage;
