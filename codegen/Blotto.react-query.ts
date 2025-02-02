/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "react-query";

import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { Timestamp, Uint64, InstantiateMsg, InstantiateMsgData, ArmyInfo, BattlefieldInfo, ExecuteMsg, ExecMsg, QueryMsg, QueryMsg1, Uint128, ArrayOfArmy, Army, Battlefield, ArrayOfBattlefield, Config, GamePhase, StatusResponse } from "./Blotto.types";
import { BlottoQueryClient, BlottoClient } from "./Blotto.client";
export interface BlottoReactQuery<TResponse, TData = TResponse> {
  client: BlottoQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface BlottoStatusQuery<TData> extends BlottoReactQuery<StatusResponse, TData> {}
export function useBlottoStatusQuery<TData = StatusResponse>({
  client,
  options
}: BlottoStatusQuery<TData>) {
  return useQuery<StatusResponse, Error, TData>(["blottoStatus", client?.contractAddress], () => client ? client.status() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BlottoConfigQuery<TData> extends BlottoReactQuery<Config, TData> {}
export function useBlottoConfigQuery<TData = Config>({
  client,
  options
}: BlottoConfigQuery<TData>) {
  return useQuery<Config, Error, TData>(["blottoConfig", client?.contractAddress], () => client ? client.config() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BlottoBattlefieldsQuery<TData> extends BlottoReactQuery<ArrayOfBattlefield, TData> {}
export function useBlottoBattlefieldsQuery<TData = ArrayOfBattlefield>({
  client,
  options
}: BlottoBattlefieldsQuery<TData>) {
  return useQuery<ArrayOfBattlefield, Error, TData>(["blottoBattlefields", client?.contractAddress], () => client ? client.battlefields() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BlottoBattlefieldQuery<TData> extends BlottoReactQuery<Battlefield, TData> {
  args: {
    id: number;
  };
}
export function useBlottoBattlefieldQuery<TData = Battlefield>({
  client,
  args,
  options
}: BlottoBattlefieldQuery<TData>) {
  return useQuery<Battlefield, Error, TData>(["blottoBattlefield", client?.contractAddress, JSON.stringify(args)], () => client ? client.battlefield({
    id: args.id
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BlottoArmiesQuery<TData> extends BlottoReactQuery<ArrayOfArmy, TData> {}
export function useBlottoArmiesQuery<TData = ArrayOfArmy>({
  client,
  options
}: BlottoArmiesQuery<TData>) {
  return useQuery<ArrayOfArmy, Error, TData>(["blottoArmies", client?.contractAddress], () => client ? client.armies() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BlottoArmyQuery<TData> extends BlottoReactQuery<Army, TData> {
  args: {
    id: number;
  };
}
export function useBlottoArmyQuery<TData = Army>({
  client,
  args,
  options
}: BlottoArmyQuery<TData>) {
  return useQuery<Army, Error, TData>(["blottoArmy", client?.contractAddress, JSON.stringify(args)], () => client ? client.army({
    id: args.id
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BlottoWithdrawMutation {
  client: BlottoClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBlottoWithdrawMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BlottoWithdrawMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BlottoWithdrawMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.withdraw(fee, memo, funds), options);
}
export interface BlottoTallyMutation {
  client: BlottoClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBlottoTallyMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BlottoTallyMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BlottoTallyMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.tally(fee, memo, funds), options);
}
export interface BlottoStakeMutation {
  client: BlottoClient;
  msg: {
    armyId: number;
    battlefieldId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBlottoStakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BlottoStakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BlottoStakeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.stake(msg, fee, memo, funds), options);
}