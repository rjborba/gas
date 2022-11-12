import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../components/Card";
import { Page } from "../components/Page";
import { PageTitle } from "../components/PageTitle";
import { Topbar } from "../components/Topbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Page>
      <Card>
        <PageTitle>Gasbit Application</PageTitle>
        <p
          style={{
            fontFamily: "Montserrat",
            fontWeight: 300,
            fontSize: "16px",
          }}
        >
          The GasBit Application allows you to provide{" "}
          <b style={{ fontWeight: 500 }}>GASLESS</b> transactions for the users
          of your application. It also provides a huge set or rules to define
          conditions in which Gas Fee supposed to be subsidized. With these
          conditions you can pay for the Transaction Fee only for a certain
          conditions, like if it is the{" "}
          <b style={{ fontWeight: 500 }}>first time that certain wallet</b> is
          using your application or if a defined{" "}
          <b style={{ fontWeight: 500 }}>NFT is owned by the user</b>.
        </p>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <div style={{ marginTop: 64 }}>
            <Link href="/newAppPage">
              <Button variant="outlined">Create Application</Button>
            </Link>
          </div>
        </div>
      </Card>
    </Page>
  );
};

export default Home;
