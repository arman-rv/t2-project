const FooterTop = ({ content, src, className }) => {
  return (
    <div className={className}>
      <img src={"/images/footer/" + src + ".png"} alt="" />
      <p>{content}</p>
    </div>
  );
};

export default FooterTop;
