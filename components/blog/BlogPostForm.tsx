import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";
import { FC, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import { useFormDataReducer, FormStatus } from "@utils/forms";
import Form from "@components/forms/Form";

interface BlogPostFormData {
  title?: string;
  body?: string;
}

interface BlogPostFormProps {
  data?: BlogPostFormData;
}

const BlogPostForm: FC<BlogPostFormProps> = ({ data }: BlogPostFormProps) => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [blogPostFormData, dispatchBlogPostFormData] = useFormDataReducer<BlogPostFormData>(
    data ?? {}
  );

  const handleChange = (field: keyof BlogPostFormData, value: string) =>
    dispatchBlogPostFormData({ type: "update", payload: { [field]: value } });

  const onSubmit = async () => {
    // Send the form data to our API and get a response.
    const response = await fetch("/api/posts/new", {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(blogPostFormData),
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // The method is POST because we are sending data.
      method: "POST",
    });

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    return await response.json();
  };
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box display="flex" justifyContent="flex-end" my={1}>
        <Link href="/admin/posts" passHref>
          <Button component={"a"}>
            <ArrowBackIcon /> Back
          </Button>
        </Link>
      </Box>
      <Form onSubmit={onSubmit} status={status} setStatus={setStatus}>
        <TextField
          label={"Title"}
          name={"title"}
          value={blogPostFormData.title ?? ""}
          onChange={(event) => handleChange("title", event.target.value)}
          fullWidth
          required
          margin={"dense"}
        />
        <TextField
          label={"Body"}
          name={"body"}
          value={blogPostFormData.body ?? ""}
          onChange={(event) => handleChange("body", event.target.value)}
          fullWidth
          multiline
          required
          margin={"normal"}
          rows={4}
        />
      </Form>
    </Box>
  );
};

export default BlogPostForm;
