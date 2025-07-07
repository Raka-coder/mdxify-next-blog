const FileName = ({ name }: { name: string }) => {
  // Split path into directory and filename
  const parts = name.split("/");
  const fileName = parts.pop(); // Get last part (file name)
  const directory = parts.length > 0 ? parts.join("/") + "/" : "";

  return (
    <span className="filename inline-flex items-center text-base font-mono">
      &apos;
      {directory && (
        <span className="text-gray-500 dark:text-gray-300">{directory}</span>
      )}
      <span className="text-gray-800 dark:text-gray-100">{fileName}</span>'
    </span>
  );
};

export default FileName;
