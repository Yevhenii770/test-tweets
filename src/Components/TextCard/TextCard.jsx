import { ContentDiv, Text } from './TextCard.styled';

const TextCard = ({ tweets, followers }) => {
  return (
    <ContentDiv>
      <Text>{tweets} TWEETS</Text>
      <Text>{followers} FOLLOWERS</Text>
    </ContentDiv>
  );
};

export default TextCard;
