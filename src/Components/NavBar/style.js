import styled from "styled-components";

export const Navigation = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 6%;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border-bottom: 2px solid ${(props) => props.theme.pallet.Lines};
`;
export const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 30%;
`;
export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.primary};
  cursor: pointer;
  p {
    padding: 0 0.5rem;
  }

  &.guest {
    width: 12rem;
    height: 2.5rem;
    border: 1px solid ${(props) => props.theme.pallet.Borders};
    border-radius: 1.5rem;
  }
`;
export const ProfileIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  width: 4.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border-radius: 1.5rem;
  box-shadow: 0px 2px 8px #ccc;
  font-size: 1.5rem;
`;
