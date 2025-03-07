function AwardSingle({ title, description }) {
  return (
    <li className="mb-2 newsreader-font text-[17px]">
      <p className="text-justify">
        <b>{title}</b>
        &nbsp;
        {description}
      </p>
    </li>
  );
}

export default AwardSingle;
