import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import { Card } from "../components/Card";
import { Page } from "../components/Page";
import { PageTitle } from "../components/PageTitle";

const NewAppPage = () => {
  return (
    <Page>
      <Card width={"600px"}>
        <>
          <PageTitle>New Application</PageTitle>
          <div style={{ marginTop: "2rem" }}></div>
          <Stack width={200} gap={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Blockchain</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Blockchain"
              >
                <MenuItem value={"MATIC"}>Matic</MenuItem>
                <MenuItem value={"MUMBAI"}>Mumbai</MenuItem>
                <MenuItem value={"ETHEREUM"}>Ethereum</MenuItem>
                <MenuItem value={"ROPSTEN"}>Ropsten</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Application Name"
              variant="outlined"
              autoComplete="off"
            />
          </Stack>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
            }}
          >
            <div style={{ marginTop: 64 }}>
              <Link href="/appDetailsPage">
                <Button variant="outlined">Create</Button>
              </Link>
            </div>
          </div>
        </>
      </Card>
    </Page>
  );
};

export default NewAppPage;
