import DateFormatter from "./DateFormatter";
import Link from "next/link";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  createdAt: string;
  excerpt: string;
  slug: string;
}

const DEFAULT_EXCERPT = "This post has no excerpt.";

const PostPreview = ({ title, createdAt, excerpt, slug }: Props) => {
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
          <DateFormatter dateString={createdAt} />
        </Typography>
        <Typography>{excerpt || DEFAULT_EXCERPT}</Typography>
      </Box>
    </Box>
  );
};

export default PostPreview;
