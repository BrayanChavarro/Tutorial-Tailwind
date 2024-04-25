const Card = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <article
          key={index}
          className="flex flex-col overflow-hidden rounded bg-white shadow"
        >
          <div className="h-52">
            <img
              className="h-full w-full object-contain"
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className="flex-1 space-y-3 p-5">
            <h3 className="text-sm font-semibold text-red-500">
              {item.category}
            </h3>
            <h2 className="text-xl font-semibold leading-tight text-slate-800">
              {item.title}
            </h2>
            <p className="hidden text-slate-500 md:block">{item.description}</p>
          </div>
          <div className="flex space-x-2 p-5">
            <img
              className="h-10 w-10 rounded-full"
              src={item.authorImage}
              alt={item.author}
            />
            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold leading-4 text-slate-600">
                {item.author}
              </span>
              <span className="text-sm text-slate-500">
                Precio: {item.price}
              </span>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Card;
