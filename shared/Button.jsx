import Link from "next/link";

const Button = ({ name, link }) => {
  return (
    <div style={{ display: "flex" }}>
      <Link href={`/${link}`}>
        <a style={{ color: "white" }}>{name}</a>
      </Link>
    </div>
  );
};
export default Button;
