import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../bookCard";
import Navbar from "../../navbar";
import TopSection from "./topSection";

const PageContainer = styled.div`
  ${tw`
        flex
        items-center
        flex-col
        h-full
        w-full
        overflow-x-hidden 
     `};
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <BookCard />
    </PageContainer>
  );
};

export default HomePage;
