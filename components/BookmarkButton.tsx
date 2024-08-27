"use client";
import { Fab, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import bookmarkProperty from "@/app/actions/bookmarkProperty";
import checkBookmarkStatus from "@/app/actions/checkBookmarkStatus";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    checkBookmarkStatus(property._id).then(res => {
      if (res.error) toast.error(res.error);
      if (res.isBookmarked) setIsBookmarked(res.isBookmarked);
      setLoading(false);
    });
  }, [property._id, userId, checkBookmarkStatus]);
  const handlebookmark = () => {
    if (!userId) {
      toast.error("You need to sign in to bookmark a property");
      return;
    }

    bookmarkProperty(property._id).then(res => {
      if (res.error) return toast.error(res.error);
      setIsBookmarked(res.isBookmarked);
      toast.success(res.message);
    });
  };
  if (loading) return <Typography>Loading...</Typography>;
  return (
    <Fab
      variant="extended"
      color={isBookmarked ? "error" : "primary"}
      onClick={handlebookmark}
    >
      <BookmarkIcon sx={{ mr: 1 }} />
      <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
        {isBookmarked ? "Remove Bookmark" : "Bookmark Property"}
      </Typography>
    </Fab>
  );
};

export default BookmarkButton;
