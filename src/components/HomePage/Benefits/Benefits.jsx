import {
  BenefitItem,
  BenefitsContent,
  ImageYellow,
  ListBenefits,
  MarkOk,
  SectionBenefits,
  TitleBenefits,
} from "./Benefits.styled";
import imgYellow from "../../../images/yellow.jpg";

const Benefits = () => {
  return (
    <SectionBenefits>
      <div>
        <TitleBenefits>Наші переваги</TitleBenefits>
        <BenefitsContent>
          <div>
            <ListBenefits>
              <BenefitItem>
                <MarkOk>&#10003;</MarkOk>
                <p>Повне страхування авто і водія на період аренди авто</p>
              </BenefitItem>
              <BenefitItem>
                <MarkOk>&#10003;</MarkOk>
                <p>Аренда авто разом з водієм</p>
              </BenefitItem>
              <BenefitItem>
                <MarkOk>&#10003;</MarkOk>
                <p>Військовим знижки -50% від вказаної ціни на сайті</p>
              </BenefitItem>
              <BenefitItem>
                <MarkOk>&#10003;</MarkOk>
                <p>Знижки та акції для постійних клиєнтів</p>
              </BenefitItem>
              <BenefitItem>
                <MarkOk>&#10003;</MarkOk>
                <p>Технічний супровід на випадок незначних технічних проблем</p>
              </BenefitItem>
              <BenefitItem>
                <MarkOk>&#10003;</MarkOk>
                <p>Заміна авто на випадок значних технічних проблем</p>
              </BenefitItem>
            </ListBenefits>
          </div>
          <div>
            <ImageYellow
              src={imgYellow}
              alt="Part of yellow car"
              width={300}
              height={360}
            />
          </div>
        </BenefitsContent>
      </div>
    </SectionBenefits>
  );
};

export default Benefits;
