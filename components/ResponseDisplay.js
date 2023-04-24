const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    content = data.result;
  } else {
    content = "";
  }

  return (
    <div className="my-5 text-white">
      {content && <h2 className="mb-5 text-2xl font-bold text-black">Tweet</h2>}
      <p className="text-2xl">{content}</p>
    </div>
  );
};

export default ResponseDisplay;
