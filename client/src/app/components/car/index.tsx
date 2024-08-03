import {
    faEllipsisH,
    faFillDrip,
    faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { ICar } from "../../../typings/car";

interface ICarProps extends ICar { }

const CarContainer = styled.div`
    width: 16.5em;
    min-height: 22em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.3);
    ${tw`
      flex
      flex-col
      items-center
      p-4
      bg-white
      rounded-lg
      m-3
    `};
`;

const CarThumbnail = styled.div`
    width: 100%;
    height: 140px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      object-fit: cover;
    }
`;

const CarName = styled.h3`
    ${tw`
      text-lg
      font-bold
      text-black
      mt-2
      mb-1
    `};
`;

const PricesContainer = styled.div`
    ${tw`
      w-full
      flex
      justify-between
      mt-2
    `};
`;

const SmallText = styled.span`
    ${tw`
      text-xs
      font-thin
      ml-1
    `};
`;

const DailyPrice = styled.h5`
    ${tw`
      text-red-500
      font-bold
      text-sm
    `};
`;

const MonthlyPrice = styled.h5`
    ${tw`
      text-gray-500
      font-bold
      text-sm
    `};
`;

const CarDetailsContainer = styled.div`
    ${tw`
      flex
      w-full
      justify-between
      mt-2
    `};
`;

const CarDetail = styled.div`
    ${tw`
      flex
      items-center
      text-gray-400
      text-xs
    `};
`;

const Seperator = styled.div`
    min-width: 100%;
    height: 1px;
    ${tw`
      bg-gray-300
      my-2
    `};
`;

const RentButton = styled(Button)`
    ${tw`
      min-w-full
      mt-4
    `};
`;

export function Car(props: ICarProps) {
    const {
        name,
        thumbnailSrc,
        dailyPrice,
        monthlyPrice,
        mileage,
        gearType,
        gas,
    } = props;

    return (
        <CarContainer>
            <CarThumbnail>
                <img src={thumbnailSrc} alt={name} />
            </CarThumbnail>
            <CarName>{name}</CarName>
            <PricesContainer>
                <DailyPrice>
                    ${dailyPrice}
                    <SmallText>/Day</SmallText>
                </DailyPrice>
                <MonthlyPrice>
                    ${monthlyPrice}
                    <SmallText>/Month</SmallText>
                </MonthlyPrice>
            </PricesContainer>
            <Seperator />
            <CarDetailsContainer>
                <CarDetail>
                    <FontAwesomeIcon icon={faTachometerAlt} />
                    <SmallText>{mileage}</SmallText>
                </CarDetail>
                <CarDetail>
                    <FontAwesomeIcon icon={faEllipsisH} />
                    <SmallText>{gearType}</SmallText>
                </CarDetail>
                <CarDetail>
                    <FontAwesomeIcon icon={faFillDrip} />
                    <SmallText>{gas}</SmallText>
                </CarDetail>
            </CarDetailsContainer>
            <RentButton text="Rent Now" />
        </CarContainer>
    );
}
