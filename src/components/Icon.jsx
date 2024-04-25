const Icon = ({ icons }) => {
  return (
    <div className="flex space-x-4">
      {icons.map((item, index) => (
        <a key={index} href="#" className={item.color}>
          <svg
            className="w-6 fill-current text-slate-300"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>{item.title}</title>
            <path d={item.path} />
          </svg>
        </a>
      ))}
    </div>
  );
};

export default Icon;
