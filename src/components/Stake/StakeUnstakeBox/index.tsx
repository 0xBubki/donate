import { FC } from 'react'
import { DepositBox } from '../DepositBox'
import { StakeBox } from '../StakeBox'
import { UnstakeBox } from '../UnstakeBox'

export enum DepositMode {
  WITHDRAW,
  DEPOSIT
}

export interface StakeUnstakeBoxProps {
  stakingMode: DepositMode
}

export const StakeUnstakeBox: FC<StakeUnstakeBoxProps> = ({ stakingMode }) => {
  return (
    <DepositBox mode={stakingMode}>
      {stakingMode === DepositMode.DEPOSIT ? (
        <StakeBox />
      ) : (
        <>
          <UnstakeBox />
        </>
      )}
    </DepositBox>
  )
}
