import React from "react";
import { ButtonLoadMpre, Icon } from "./LoadMore.styled";
import { useDispatch, useSelector } from "react-redux";
import { togglePage } from "../../redux/usersSlice";

const LoadMore = () => {
  const { page } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const onLoadMore = () => {
    dispatch(togglePage());
  };
  return (
    <>
      {page !== 4 && (
        <ButtonLoadMpre onClick={onLoadMore}>
          Load More <Icon />
        </ButtonLoadMpre>
      )}
    </>
  );
};

export default LoadMore;
