import { ContentDiv, Text } from './TextCard.styled';

const TextCard = ({ tweets, followers }) => {
  return (
    <ContentDiv>
      <Text>{tweets} Tweets</Text>
      <Text>{followers.toLocaleString('en-US')} Followers</Text>
    </ContentDiv>
  );
};

export default TextCard;
