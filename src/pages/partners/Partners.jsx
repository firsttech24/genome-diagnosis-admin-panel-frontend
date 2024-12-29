import React, { useEffect } from "react";
import fetchData from "../../../apis/getapis";
import { Button } from "@mui/material";
import FormDialog from "../../components/Form";
import postData from "../../../apis/postapi";
import STable from "../../components/Table";

export default function Partners() {
  const [list, setList] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const [rows, setRows] = React.useState([]);

  const form = {
    photo : "",
    name : "",
    timeline : "",
    description: "",
  };

  const [columns, setColumns] = React.useState(
    Object.keys(form).map((key) => ({
      id: key,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      minWidth: 170,
      align: "left",
    }))
  );

  useEffect(() => {
    const data = fetchData("partners");
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = (formData) => {
    postData('partners', formData);
  };

  return (
    <div>
      <STable rows={rows} columns={columns}></STable>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}>
        {" "}
        Add New{" "}
      </Button>
      <FormDialog
        form={form}
        open={open}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    </div>
  )
}


