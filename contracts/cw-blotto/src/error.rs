use cosmwasm_std::{DivideByZeroError, OverflowError, StdError};
use cw_utils::PaymentError;
use thiserror::Error;

/// Custom errors for this contract
#[derive(Error, Debug, PartialEq)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    /// This inherits from cw721-base::ContractError to handle the base contract errors
    #[error("NFT contract error: {0}")]
    Cw721Error(#[from] cw721_base::ContractError),

    #[error("{0}")]
    DivideByZeroError(#[from] DivideByZeroError),

    #[error("{0}")]
    OverflowErr(#[from] OverflowError),

    #[error("Invalid input: {denom}")]
    InvalidDenom { denom: String },

    #[error(
        "Contract must be instantiated with at least 2 armies (sides) and less that {max_limit}"
    )]
    InvalidArmyCount { max_limit: u32 },

    #[error("Contract must be instantiated with at least 1 battlefield and less than {max_limit}")]
    InvalidBattlefieldCount { max_limit: u32 },

    #[error("Army with the ID {id}, was not found.")]
    NoArmy { id: u8 },

    #[error("Nothing to claim.")]
    NothingToClaim {},

    #[error("Game is not in Open Phase")]
    NotOpen {},

    #[error("Game has not finished")]
    NotOver {},

    #[error("Can only stake on one side in a battlefield")]
    Traitor {},

    #[error("{0}")]
    PaymentError(#[from] PaymentError),
}
