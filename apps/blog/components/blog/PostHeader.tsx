import Avatar from "@mui/material/Avatar";
import DateFormatter from "./DateFormatter";
// import CoverImage from "./CoverImage";
import PostTitle from "./PostTitle";

type Props = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
};

const AUTHOR_NAME = "Jacob Jove";
const IMAGE = "/images/profile.jpg";

const PostHeader = ({ title, publishedAt }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar alt={AUTHOR_NAME} src={IMAGE} />
      </div>
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar alt={AUTHOR_NAME} src={IMAGE} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={publishedAt} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
