import styled from "styled-components";

export const SectionBenefits = styled.section`
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
`;

export const TitleBenefits = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
`;

export const ListBenefits = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 20px;
`;

export const MarkOk = styled.span`
  width: 22px;
  height: 22px;
  background-color: green;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BenefitsContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 20px;
`;

export const ImageYellow = styled.img`
  object-fit: cover;
`;
