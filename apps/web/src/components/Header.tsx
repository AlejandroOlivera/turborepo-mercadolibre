import styled from "styled-components";

const NavHeader = styled.header`
  display: block;
  height: 50px;
  background-color: #fff159;
  border: 0;
  position: relative;
  font-size: 13px;
  font-weight: 400;
  color: #333;
  user-select: none;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0;
    top: 0;
    -webkit-box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  }
`;

const NavBounds = styled.div`
  height: auto;
  max-width: 1200px;
  padding: 0 0 0 80px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  display: block;
`;

const NavLogo = styled.a`
  background-image: url("https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png");
  height: 34px;
  top: 11px;
  width: 134px;
  left: 10px;
  background-repeat: no-repeat;
  overflow: hidden;
  position: absolute;
`;

const NavSearch = styled.form`
  position: relative;
  display: inherit;
  right: 94px;
  left: 35px;
  max-width: 600px;
  padding: 8px 1px;
  height: 56px;
  z-index: 910;
  will-change: left;
  transition: left 0.15s ease-out;
  top: 0;
`;

const NavSearchInput = styled.input`
  height: 39px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 /20%);
  padding: 7px 60px 9px 15px;
  border-radius: 2px;
  background-color: #fff;
  border: 0 rgb(0, 0, 0, 0.2);
  position: relative;
  z-index: 915;
  width: 100%;
  margin: 0;
`;

export const Header: React.FC = () => {
  return (
    <NavHeader>
      <NavBounds>
        <NavLogo />
        <NavSearch>
          <NavSearchInput
            placeholder="Nunca dejes de buscar"
            maxLength={120}
            type="text"
          />
        </NavSearch>
      </NavBounds>
    </NavHeader>
  );
};
