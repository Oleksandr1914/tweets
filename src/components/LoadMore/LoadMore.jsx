import React from "react";
import { ButtonLoadMpre } from "./LoadMore.styled";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreUsers } from "../../redux/usersSlice";

const LoadMore = () => {
  const { users, page } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const calcUser = users.length;

  const onLoadMore = () => {
    dispatch(loadMoreUsers(page));
  };
  return (
    <>
      {calcUser < 12 && (
        <ButtonLoadMpre onClick={onLoadMore}>Load More</ButtonLoadMpre>
      )}
    </>
  );
};

export default LoadMore;
