import { BlogPost } from "@interfaces/Post";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import DateFormatter from "./DateFormatter";

const DEFAULT_EXCERPT = "This post has no excerpt.";

type PostPreviewProps = Pick<BlogPost, "title" | "publishedAt" | "excerpt" | "slug">;

const PostPreview = ({ title, publishedAt, excerpt, slug }: PostPreviewProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
      }}
    >
      <Avatar
        alt={"Jacob"}
        src={"/images/profile.jpg"}
        sx={{
          width: 64,
          height: 64,
          m: 1,
        }}
      />
      <Box>
        <Typography variant={"h3"}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{title}</a>
          </Link>
        </Typography>
        <Typography component={"small"} fontSize={"0.85rem"}>
          <DateFormatter dateString={publishedAt} />
        </Typography>
        <Typography>{excerpt || DEFAULT_EXCERPT}</Typography>
      </Box>
    </Box>
  );
};

export default PostPreview;
