const NavbarItem = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

const Navbar = () => {
  return (
    <div>
      <NavbarItem>Test</NavbarItem>
    </div>
  );
};

export default Navbar;
