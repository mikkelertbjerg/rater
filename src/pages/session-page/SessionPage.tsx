interface Props {
  sessionId: string;
}

const SessionPage = ({ sessionId }: Props) => {
  return <>
    <h1>{sessionId}</h1>
  </>;
};

export default SessionPage;
