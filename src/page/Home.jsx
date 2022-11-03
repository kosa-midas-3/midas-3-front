import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { postAuth } from "../api/Auth/Auth.api";
import Header from "../components/header/Header";
import List from "../components/List/List";
import Time from "../components/time/Time";

const Home = () => {
  const { data, refetch, isLoading } = useQuery("getUserInfo", postAuth, {
    onSuccess: () => {},
    onError: () => {},
    onSettled: () => {},
  });

  return (
    <>
      <Header name={data?.nickname} />
      <Time
        workingStatus={data?.workingStatus}
        infoRefetch={refetch}
        startTime={data?.startTime}
        isLoading={isLoading}
      />
      <List department={data?.department} />
    </>
  );
};

export default Home;
