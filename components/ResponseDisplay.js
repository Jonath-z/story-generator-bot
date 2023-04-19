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
    <div className="my-5 text-gray-800">
      {content && <h2 className="mb-5 text-2xl font-bold">Story</h2>}
      <p>{content}</p>
    </div>
  );
};

export default ResponseDisplay;
