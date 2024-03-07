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
                <p>
                  Технічний супровід або заміна авто на випадок технічних
                  проблем
                </p>
              </BenefitItem>
              <BenefitItem>
                <MarkOk>&#10003;</MarkOk>
                <p>Аренда авто разом з водієм</p>
              </BenefitItem>
              <BenefitItem>
                <MarkOk>&#10003;</MarkOk>
                <p>
                  Гнучкі програми оплати аренди та знижки постійним клієнтам
                </p>
              </BenefitItem>
              <BenefitItem>
                <MarkOk>&#10003;</MarkOk>
                <p>Військовим знижки -50% від вказаної ціни на сайті</p>
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
