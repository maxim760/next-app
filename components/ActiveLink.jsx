import { useRouter } from "next/router";
import Link from "next/link";

export const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  const isActive = router.pathname === href
  const style = {
    marginRight: 10,
    color: isActive ? "#B22222" : "black",
    fontSize:20,
    paddingBottom: 4,
    borderBottom: isActive ? "2px solid #B22222" : "",
  };

  return (
    <Link href={href}>
      <a style={style}>{children}</a>
    </Link>
  );
};
