import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { postAuth } from "../api/Auth/Auth.api";
import Header from "../components/header/Header";
import List from "../components/List/List";
import Time from "../components/time/Time";

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  .page {
    height: 100vh;
    width: 100vw;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  .page:nth-child(1) {
    padding-bottom: 62px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .page:nth-child(2) {
    background-color: rgba(108, 220, 132, 1);
  }
`;

const Home = () => {
  const { data, refetch, isLoading } = useQuery("getUserInfo", postAuth, {
    onSuccess: () => {},
    onError: () => {},
    onSettled: () => {},
  });

  return (
    <Container>
      <div className="page">
        <Header name={data?.nickname} infoRefetch={refetch} />
        <Time
          workingStatus={data?.workingStatus}
          infoRefetch={refetch}
          startTime={data?.startTime}
          isLoading={isLoading}
        />
        <List department={data?.department} />
      </div>
      <div className="page"></div>
    </Container>
  );
};

export default Home;
