import React from "react";

const PageHeading = ({title, description, img}) => {
  return (
    <div>
      <h1 className="text-primary text-[20px] font-semibold">{title}</h1>
      {description ? (
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-primary font-notoSans mt-[22px]">{description}</p>
          {img ? <img src={img} alt="featured img" /> : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PageHeading;
