/* eslint-disable react/prop-types */

const Divider = ({ children }) => {
  return (
    <div className="flex flex-col lg:w-[20%] mx-auto text-green-500 border-opacity-50 border-green-500">
      <div className="divider">{children}</div>
    </div>
  );
};

export default Divider;
