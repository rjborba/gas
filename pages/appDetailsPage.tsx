import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import { Card } from "../components/Card";
import { Page } from "../components/Page";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Dialog } from "../components/Dialog";
import { useState } from "react";

const NewAppPage = () => {
  const [isRulesModalVisible, setIsRulesModalVisible] = useState(false);
  const [isContractModalVisible, setIsContractModalVisible] = useState(false);
  const [contracts, setContracts] = useState<any>([]);
  const [rules, setRules] = useState<any>([]);

  return (
    <>
      <Page>
        <Box height="100%" paddingTop={6}>
          {/* Title */}
          <Card width={"800px"}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignContent="center"
            >
              <Stack>
                <Box fontFamily="Montserrat" fontSize={24}>
                  Capture the Flag
                </Box>
                <Box fontSize={12} paddingTop={0.5} fontWeight={200}>
                  Created at 11/12/2022
                </Box>
              </Stack>
              <Box>
                <Box
                  fontFamily="Montserrat"
                  fontSize={24}
                  style={{
                    backgroundColor: "#F9B300",
                    fontWeight: "400",
                    padding: "8px",
                    fontSize: "14px",
                    borderRadius: "20px",
                  }}
                >
                  Mumbai
                </Box>
              </Box>
            </Box>
            <Box marginTop={8} fontFamily="Montserrat">
              API Key
            </Box>
            <Box
              fontFamily="Montserrat"
              fontWeight="200"
              fontSize="12px"
              paddingTop={0.5}
            >
              85136c79cbf9fe36bb9d05d0639c70c265c18d37
            </Box>
            <Box marginTop={1} fontFamily="Montserrat">
              TrustedForwarder address
            </Box>
            <Box
              fontFamily="Montserrat"
              fontWeight="200"
              fontSize="12px"
              paddingTop={0.5}
            >
              0x59F06e983964bA5DD9b788f33fa1e5201b6BdDb3
            </Box>
          </Card>

          <Box pt={8} />

          {/* Contracts */}
          <Card width={"800px"}>
            <Box
              bgcolor="#D9D9D980"
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              margin="0 -36px"
              marginTop="-36px"
              padding="36px"
              paddingTop="36px"
              fontSize={21}
            >
              Contracts
              <Box>
                <Button
                  variant="outlined"
                  sx={{ marginLeft: "auto" }}
                  onClick={() => {
                    setIsContractModalVisible(true);
                  }}
                >
                  Add Contract
                </Button>
              </Box>
            </Box>
            <Box display="flex" marginTop={8} gap={4}>
              {contracts.length === 0 ? (
                <Box
                  display="flex"
                  fontFamily="Montserrat"
                  fontSize={14}
                  fontWeight={200}
                >
                  Empty
                </Box>
              ) : (
                contracts.map((contract: any) => {
                  return (
                    <>
                      <Stack gap={1}>
                        <Box fontSize={14}>Name</Box>
                        <Box fontSize={14} fontWeight="300">
                          {contract.name}
                        </Box>
                      </Stack>
                      <Stack gap={1}>
                        <Box fontSize={14}>Address</Box>
                        <Box fontSize={14} fontWeight="300">
                          {contract.address}
                        </Box>
                      </Stack>
                      <Stack gap={1} alignItems="center">
                        <Box fontSize={14}>Remove</Box>
                        <Box fontSize={14}>
                          <RemoveCircleOutlineIcon
                            style={{
                              color: "red",
                              height: 20,
                              width: 20,
                              cursor: "pointer",
                            }}
                          />
                        </Box>
                      </Stack>
                    </>
                  );
                })
              )}
            </Box>
          </Card>

          <Box pt={8} />

          {/* Rules */}
          <Card width={"800px"}>
            <Box
              bgcolor="#D9D9D980"
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              margin="0 -36px"
              marginTop="-36px"
              padding="36px"
              paddingTop="36px"
            >
              <Box>
                <Box fontSize={21} fontWeight={400}>
                  Rules
                </Box>
                <Box
                  fontSize={14}
                  fontWeight={300}
                  paddingTop={1}
                  color="#7A7878;
"
                >
                  Use the fields below to define the rules
                </Box>
              </Box>
              <Button
                variant="outlined"
                onClick={() => setIsRulesModalVisible(true)}
              >
                NEW RULE
              </Button>
            </Box>
            {/* Rules table */}
            <Box display="flex" flexDirection="column" marginTop={6} gap={1}>
              {rules.length === 0 ? (
                <Box
                  display="flex"
                  fontFamily="Montserrat"
                  fontSize={14}
                  fontWeight={200}
                >
                  Empty
                </Box>
              ) : (
                rules.map((rules: any) => {
                  return (
                    <Box display="flex" gap={4}>
                      <Stack gap={1}>
                        <Box fontSize={14}>Description</Box>
                        <Box fontSize={14} fontWeight="300">
                          {rules.description}
                        </Box>
                      </Stack>
                      <Stack gap={1}>
                        <Box fontSize={14}>Type</Box>
                        <Box fontSize={14} fontWeight="300">
                          {rules.type}
                        </Box>
                      </Stack>
                      <Stack gap={1} alignItems="center">
                        <Box fontSize={14}>Amount</Box>
                        <Box fontSize={14} fontWeight="300">
                          {rules.amount}
                        </Box>
                      </Stack>
                      <Stack gap={1} alignItems="center">
                        <Box fontSize={14}>Timebox</Box>
                        <Box fontSize={14} fontWeight="300">
                          {rules.timebox}
                        </Box>
                      </Stack>
                      <Stack gap={1} alignItems="center">
                        <Box fontSize={14}>Remove</Box>
                        <Box fontSize={14}>
                          <RemoveCircleOutlineIcon
                            style={{
                              color: "red",
                              height: 20,
                              width: 20,
                              cursor: "pointer",
                            }}
                          />
                        </Box>
                      </Stack>
                    </Box>
                  );
                })
              )}
            </Box>
          </Card>

          <Box paddingTop={10} />
        </Box>
      </Page>
      <Dialog
        isOpen={isRulesModalVisible}
        onClose={() => {
          setIsRulesModalVisible(false);
        }}
      >
        <Box display="flex" flexDirection={"row"} width={800}>
          <Box flex={1} padding={3}>
            <Box fontFamily="Montserrat" fontSize={24}>
              New Rule
            </Box>
            <Stack gap={2}>
              <TextField
                autoComplete="off"
                sx={{ marginTop: 4 }}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                size="small"
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Type of Rule
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Blockchain"
                >
                  <MenuItem value={"AMOUNT_OF_TRANSACTIONS"}>
                    Amount of Transactions
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Box display="flex" justifyContent="end" pt={6}>
              <Button
                onClick={() => {
                  setRules([
                    {
                      description: "Limits of transactions",
                      type: "Amount of transactions",
                      amount: 200,
                      timebox: "Per Day",
                    },
                  ]);
                  setIsRulesModalVisible(false);
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
          <Box bgcolor="#D9D9D9" width={300} padding={3}>
            <Box fontFamily="montserrat" fontSize={18} fontWeight={300}>
              How Rules work
            </Box>
            <Box
              fontFamily="montserrat"
              fontSize={12}
              pt={2}
              fontWeight={300}
              fontStyle="italic"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eu nunc erat. Pellentesque vitae leo elementum, finibus metus
              eget, finibus eros. Nam eu mattis ex, ut sagittis turpis.
            </Box>
          </Box>
        </Box>
      </Dialog>
      <Dialog
        isOpen={isContractModalVisible}
        onClose={() => {
          setIsContractModalVisible(false);
        }}
      >
        <Box display="flex" flexDirection={"row"} width={800}>
          <Box flex={1} padding={3}>
            <Box fontFamily="Montserrat" fontSize={24}>
              New Rule
            </Box>
            <Stack gap={2}>
              <TextField
                autoComplete="off"
                sx={{ marginTop: 4 }}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                size="small"
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Type of Rule
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Blockchain"
                >
                  <MenuItem value={"AMOUNT_OF_TRANSACTIONS"}>
                    Amount of Transactions
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Box display="flex" justifyContent="end" pt={6}>
              <Button
                onClick={() => {
                  setContracts([
                    {
                      name: "Capture the Flag",
                      address: "0x92322F44698605909c69900F2Cdb194d278702Ea",
                    },
                  ]);
                  setIsContractModalVisible(false);
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
          <Box bgcolor="#D9D9D9" width={300} padding={3}>
            <Box fontFamily="montserrat" fontSize={18} fontWeight={300}>
              How Rules work
            </Box>
            <Box
              fontFamily="montserrat"
              fontSize={12}
              pt={2}
              fontWeight={300}
              fontStyle="italic"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eu nunc erat. Pellentesque vitae leo elementum, finibus metus
              eget, finibus eros. Nam eu mattis ex, ut sagittis turpis.
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default NewAppPage;
