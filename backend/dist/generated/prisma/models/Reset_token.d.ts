import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Reset_token
 *
 */
export type Reset_tokenModel = runtime.Types.Result.DefaultSelection<Prisma.$Reset_tokenPayload>;
export type AggregateReset_token = {
    _count: Reset_tokenCountAggregateOutputType | null;
    _avg: Reset_tokenAvgAggregateOutputType | null;
    _sum: Reset_tokenSumAggregateOutputType | null;
    _min: Reset_tokenMinAggregateOutputType | null;
    _max: Reset_tokenMaxAggregateOutputType | null;
};
export type Reset_tokenAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type Reset_tokenSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type Reset_tokenMinAggregateOutputType = {
    id: number | null;
    token: string | null;
    userId: number | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type Reset_tokenMaxAggregateOutputType = {
    id: number | null;
    token: string | null;
    userId: number | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type Reset_tokenCountAggregateOutputType = {
    id: number;
    token: number;
    userId: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
};
export type Reset_tokenAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type Reset_tokenSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type Reset_tokenMinAggregateInputType = {
    id?: true;
    token?: true;
    userId?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type Reset_tokenMaxAggregateInputType = {
    id?: true;
    token?: true;
    userId?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type Reset_tokenCountAggregateInputType = {
    id?: true;
    token?: true;
    userId?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
};
export type Reset_tokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Reset_token to aggregate.
     */
    where?: Prisma.Reset_tokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reset_tokens to fetch.
     */
    orderBy?: Prisma.Reset_tokenOrderByWithRelationInput | Prisma.Reset_tokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Reset_tokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reset_tokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reset_tokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Reset_tokens
    **/
    _count?: true | Reset_tokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Reset_tokenAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Reset_tokenSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Reset_tokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Reset_tokenMaxAggregateInputType;
};
export type GetReset_tokenAggregateType<T extends Reset_tokenAggregateArgs> = {
    [P in keyof T & keyof AggregateReset_token]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReset_token[P]> : Prisma.GetScalarType<T[P], AggregateReset_token[P]>;
};
export type Reset_tokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Reset_tokenWhereInput;
    orderBy?: Prisma.Reset_tokenOrderByWithAggregationInput | Prisma.Reset_tokenOrderByWithAggregationInput[];
    by: Prisma.Reset_tokenScalarFieldEnum[] | Prisma.Reset_tokenScalarFieldEnum;
    having?: Prisma.Reset_tokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Reset_tokenCountAggregateInputType | true;
    _avg?: Reset_tokenAvgAggregateInputType;
    _sum?: Reset_tokenSumAggregateInputType;
    _min?: Reset_tokenMinAggregateInputType;
    _max?: Reset_tokenMaxAggregateInputType;
};
export type Reset_tokenGroupByOutputType = {
    id: number;
    token: string;
    userId: number;
    expiresAt: Date;
    createdAt: Date;
    _count: Reset_tokenCountAggregateOutputType | null;
    _avg: Reset_tokenAvgAggregateOutputType | null;
    _sum: Reset_tokenSumAggregateOutputType | null;
    _min: Reset_tokenMinAggregateOutputType | null;
    _max: Reset_tokenMaxAggregateOutputType | null;
};
export type GetReset_tokenGroupByPayload<T extends Reset_tokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Reset_tokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Reset_tokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Reset_tokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Reset_tokenGroupByOutputType[P]>;
}>>;
export type Reset_tokenWhereInput = {
    AND?: Prisma.Reset_tokenWhereInput | Prisma.Reset_tokenWhereInput[];
    OR?: Prisma.Reset_tokenWhereInput[];
    NOT?: Prisma.Reset_tokenWhereInput | Prisma.Reset_tokenWhereInput[];
    id?: Prisma.IntFilter<"Reset_token"> | number;
    token?: Prisma.StringFilter<"Reset_token"> | string;
    userId?: Prisma.IntFilter<"Reset_token"> | number;
    expiresAt?: Prisma.DateTimeFilter<"Reset_token"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Reset_token"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type Reset_tokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type Reset_tokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    token?: string;
    userId?: number;
    AND?: Prisma.Reset_tokenWhereInput | Prisma.Reset_tokenWhereInput[];
    OR?: Prisma.Reset_tokenWhereInput[];
    NOT?: Prisma.Reset_tokenWhereInput | Prisma.Reset_tokenWhereInput[];
    expiresAt?: Prisma.DateTimeFilter<"Reset_token"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Reset_token"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "token" | "userId">;
export type Reset_tokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.Reset_tokenCountOrderByAggregateInput;
    _avg?: Prisma.Reset_tokenAvgOrderByAggregateInput;
    _max?: Prisma.Reset_tokenMaxOrderByAggregateInput;
    _min?: Prisma.Reset_tokenMinOrderByAggregateInput;
    _sum?: Prisma.Reset_tokenSumOrderByAggregateInput;
};
export type Reset_tokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.Reset_tokenScalarWhereWithAggregatesInput | Prisma.Reset_tokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.Reset_tokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Reset_tokenScalarWhereWithAggregatesInput | Prisma.Reset_tokenScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Reset_token"> | number;
    token?: Prisma.StringWithAggregatesFilter<"Reset_token"> | string;
    userId?: Prisma.IntWithAggregatesFilter<"Reset_token"> | number;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"Reset_token"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Reset_token"> | Date | string;
};
export type Reset_tokenCreateInput = {
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutReset_tokenInput;
};
export type Reset_tokenUncheckedCreateInput = {
    id?: number;
    token: string;
    userId: number;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type Reset_tokenUpdateInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutReset_tokenNestedInput;
};
export type Reset_tokenUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Reset_tokenCreateManyInput = {
    id?: number;
    token: string;
    userId: number;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type Reset_tokenUpdateManyMutationInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Reset_tokenUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Reset_tokenNullableScalarRelationFilter = {
    is?: Prisma.Reset_tokenWhereInput | null;
    isNot?: Prisma.Reset_tokenWhereInput | null;
};
export type Reset_tokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type Reset_tokenAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type Reset_tokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type Reset_tokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type Reset_tokenSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type Reset_tokenCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.Reset_tokenCreateWithoutUserInput, Prisma.Reset_tokenUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.Reset_tokenCreateOrConnectWithoutUserInput;
    connect?: Prisma.Reset_tokenWhereUniqueInput;
};
export type Reset_tokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.Reset_tokenCreateWithoutUserInput, Prisma.Reset_tokenUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.Reset_tokenCreateOrConnectWithoutUserInput;
    connect?: Prisma.Reset_tokenWhereUniqueInput;
};
export type Reset_tokenUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.Reset_tokenCreateWithoutUserInput, Prisma.Reset_tokenUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.Reset_tokenCreateOrConnectWithoutUserInput;
    upsert?: Prisma.Reset_tokenUpsertWithoutUserInput;
    disconnect?: Prisma.Reset_tokenWhereInput | boolean;
    delete?: Prisma.Reset_tokenWhereInput | boolean;
    connect?: Prisma.Reset_tokenWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Reset_tokenUpdateToOneWithWhereWithoutUserInput, Prisma.Reset_tokenUpdateWithoutUserInput>, Prisma.Reset_tokenUncheckedUpdateWithoutUserInput>;
};
export type Reset_tokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.Reset_tokenCreateWithoutUserInput, Prisma.Reset_tokenUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.Reset_tokenCreateOrConnectWithoutUserInput;
    upsert?: Prisma.Reset_tokenUpsertWithoutUserInput;
    disconnect?: Prisma.Reset_tokenWhereInput | boolean;
    delete?: Prisma.Reset_tokenWhereInput | boolean;
    connect?: Prisma.Reset_tokenWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Reset_tokenUpdateToOneWithWhereWithoutUserInput, Prisma.Reset_tokenUpdateWithoutUserInput>, Prisma.Reset_tokenUncheckedUpdateWithoutUserInput>;
};
export type Reset_tokenCreateWithoutUserInput = {
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type Reset_tokenUncheckedCreateWithoutUserInput = {
    id?: number;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type Reset_tokenCreateOrConnectWithoutUserInput = {
    where: Prisma.Reset_tokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.Reset_tokenCreateWithoutUserInput, Prisma.Reset_tokenUncheckedCreateWithoutUserInput>;
};
export type Reset_tokenUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.Reset_tokenUpdateWithoutUserInput, Prisma.Reset_tokenUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.Reset_tokenCreateWithoutUserInput, Prisma.Reset_tokenUncheckedCreateWithoutUserInput>;
    where?: Prisma.Reset_tokenWhereInput;
};
export type Reset_tokenUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.Reset_tokenWhereInput;
    data: Prisma.XOR<Prisma.Reset_tokenUpdateWithoutUserInput, Prisma.Reset_tokenUncheckedUpdateWithoutUserInput>;
};
export type Reset_tokenUpdateWithoutUserInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Reset_tokenUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Reset_tokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    userId?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reset_token"]>;
export type Reset_tokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    userId?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reset_token"]>;
export type Reset_tokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    userId?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reset_token"]>;
export type Reset_tokenSelectScalar = {
    id?: boolean;
    token?: boolean;
    userId?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
};
export type Reset_tokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["reset_token"]>;
export type Reset_tokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type Reset_tokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type Reset_tokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $Reset_tokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Reset_token";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        token: string;
        userId: number;
        expiresAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["reset_token"]>;
    composites: {};
};
export type Reset_tokenGetPayload<S extends boolean | null | undefined | Reset_tokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Reset_tokenPayload, S>;
export type Reset_tokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Reset_tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Reset_tokenCountAggregateInputType | true;
};
export interface Reset_tokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Reset_token'];
        meta: {
            name: 'Reset_token';
        };
    };
    /**
     * Find zero or one Reset_token that matches the filter.
     * @param {Reset_tokenFindUniqueArgs} args - Arguments to find a Reset_token
     * @example
     * // Get one Reset_token
     * const reset_token = await prisma.reset_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Reset_tokenFindUniqueArgs>(args: Prisma.SelectSubset<T, Reset_tokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Reset_tokenClient<runtime.Types.Result.GetResult<Prisma.$Reset_tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Reset_token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Reset_tokenFindUniqueOrThrowArgs} args - Arguments to find a Reset_token
     * @example
     * // Get one Reset_token
     * const reset_token = await prisma.reset_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Reset_tokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Reset_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Reset_tokenClient<runtime.Types.Result.GetResult<Prisma.$Reset_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Reset_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reset_tokenFindFirstArgs} args - Arguments to find a Reset_token
     * @example
     * // Get one Reset_token
     * const reset_token = await prisma.reset_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Reset_tokenFindFirstArgs>(args?: Prisma.SelectSubset<T, Reset_tokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__Reset_tokenClient<runtime.Types.Result.GetResult<Prisma.$Reset_tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Reset_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reset_tokenFindFirstOrThrowArgs} args - Arguments to find a Reset_token
     * @example
     * // Get one Reset_token
     * const reset_token = await prisma.reset_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Reset_tokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Reset_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Reset_tokenClient<runtime.Types.Result.GetResult<Prisma.$Reset_tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reset_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reset_tokens
     * const reset_tokens = await prisma.reset_token.findMany()
     *
     * // Get first 10 Reset_tokens
     * const reset_tokens = await prisma.reset_token.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reset_tokenWithIdOnly = await prisma.reset_token.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Reset_tokenFindManyArgs>(args?: Prisma.SelectSubset<T, Reset_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Reset_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Reset_token.
     * @param {Reset_tokenCreateArgs} args - Arguments to create a Reset_token.
     * @example
     * // Create one Reset_token
     * const Reset_token = await prisma.reset_token.create({
     *   data: {
     *     // ... data to create a Reset_token
     *   }
     * })
     *
     */
    create<T extends Reset_tokenCreateArgs>(args: Prisma.SelectSubset<T, Reset_tokenCreateArgs<ExtArgs>>): Prisma.Prisma__Reset_tokenClient<runtime.Types.Result.GetResult<Prisma.$Reset_tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Reset_tokens.
     * @param {Reset_tokenCreateManyArgs} args - Arguments to create many Reset_tokens.
     * @example
     * // Create many Reset_tokens
     * const reset_token = await prisma.reset_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Reset_tokenCreateManyArgs>(args?: Prisma.SelectSubset<T, Reset_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Reset_tokens and returns the data saved in the database.
     * @param {Reset_tokenCreateManyAndReturnArgs} args - Arguments to create many Reset_tokens.
     * @example
     * // Create many Reset_tokens
     * const reset_token = await prisma.reset_token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Reset_tokens and only return the `id`
     * const reset_tokenWithIdOnly = await prisma.reset_token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Reset_tokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Reset_tokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Reset_tokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Reset_token.
     * @param {Reset_tokenDeleteArgs} args - Arguments to delete one Reset_token.
     * @example
     * // Delete one Reset_token
     * const Reset_token = await prisma.reset_token.delete({
     *   where: {
     *     // ... filter to delete one Reset_token
     *   }
     * })
     *
     */
    delete<T extends Reset_tokenDeleteArgs>(args: Prisma.SelectSubset<T, Reset_tokenDeleteArgs<ExtArgs>>): Prisma.Prisma__Reset_tokenClient<runtime.Types.Result.GetResult<Prisma.$Reset_tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Reset_token.
     * @param {Reset_tokenUpdateArgs} args - Arguments to update one Reset_token.
     * @example
     * // Update one Reset_token
     * const reset_token = await prisma.reset_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Reset_tokenUpdateArgs>(args: Prisma.SelectSubset<T, Reset_tokenUpdateArgs<ExtArgs>>): Prisma.Prisma__Reset_tokenClient<runtime.Types.Result.GetResult<Prisma.$Reset_tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Reset_tokens.
     * @param {Reset_tokenDeleteManyArgs} args - Arguments to filter Reset_tokens to delete.
     * @example
     * // Delete a few Reset_tokens
     * const { count } = await prisma.reset_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Reset_tokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, Reset_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reset_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reset_tokens
     * const reset_token = await prisma.reset_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Reset_tokenUpdateManyArgs>(args: Prisma.SelectSubset<T, Reset_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Reset_tokens and returns the data updated in the database.
     * @param {Reset_tokenUpdateManyAndReturnArgs} args - Arguments to update many Reset_tokens.
     * @example
     * // Update many Reset_tokens
     * const reset_token = await prisma.reset_token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Reset_tokens and only return the `id`
     * const reset_tokenWithIdOnly = await prisma.reset_token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends Reset_tokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Reset_tokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Reset_tokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Reset_token.
     * @param {Reset_tokenUpsertArgs} args - Arguments to update or create a Reset_token.
     * @example
     * // Update or create a Reset_token
     * const reset_token = await prisma.reset_token.upsert({
     *   create: {
     *     // ... data to create a Reset_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reset_token we want to update
     *   }
     * })
     */
    upsert<T extends Reset_tokenUpsertArgs>(args: Prisma.SelectSubset<T, Reset_tokenUpsertArgs<ExtArgs>>): Prisma.Prisma__Reset_tokenClient<runtime.Types.Result.GetResult<Prisma.$Reset_tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reset_tokenCountArgs} args - Arguments to filter Reset_tokens to count.
     * @example
     * // Count the number of Reset_tokens
     * const count = await prisma.reset_token.count({
     *   where: {
     *     // ... the filter for the Reset_tokens we want to count
     *   }
     * })
    **/
    count<T extends Reset_tokenCountArgs>(args?: Prisma.Subset<T, Reset_tokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Reset_tokenCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Reset_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reset_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reset_tokenAggregateArgs>(args: Prisma.Subset<T, Reset_tokenAggregateArgs>): Prisma.PrismaPromise<GetReset_tokenAggregateType<T>>;
    /**
     * Group by Reset_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reset_tokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends Reset_tokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Reset_tokenGroupByArgs['orderBy'];
    } : {
        orderBy?: Reset_tokenGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Reset_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReset_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Reset_token model
     */
    readonly fields: Reset_tokenFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Reset_token.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Reset_tokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Reset_token model
 */
export interface Reset_tokenFieldRefs {
    readonly id: Prisma.FieldRef<"Reset_token", 'Int'>;
    readonly token: Prisma.FieldRef<"Reset_token", 'String'>;
    readonly userId: Prisma.FieldRef<"Reset_token", 'Int'>;
    readonly expiresAt: Prisma.FieldRef<"Reset_token", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Reset_token", 'DateTime'>;
}
/**
 * Reset_token findUnique
 */
export type Reset_tokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reset_token
     */
    select?: Prisma.Reset_tokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reset_token
     */
    omit?: Prisma.Reset_tokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Reset_tokenInclude<ExtArgs> | null;
    /**
     * Filter, which Reset_token to fetch.
     */
    where: Prisma.Reset_tokenWhereUniqueInput;
};
/**
 * Reset_token findUniqueOrThrow
 */
export type Reset_tokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reset_token
     */
    select?: Prisma.Reset_tokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reset_token
     */
    omit?: Prisma.Reset_tokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Reset_tokenInclude<ExtArgs> | null;
    /**
     * Filter, which Reset_token to fetch.
     */
    where: Prisma.Reset_tokenWhereUniqueInput;
};
/**
 * Reset_token findFirst
 */
export type Reset_tokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reset_token
     */
    select?: Prisma.Reset_tokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reset_token
     */
    omit?: Prisma.Reset_tokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Reset_tokenInclude<ExtArgs> | null;
    /**
     * Filter, which Reset_token to fetch.
     */
    where?: Prisma.Reset_tokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reset_tokens to fetch.
     */
    orderBy?: Prisma.Reset_tokenOrderByWithRelationInput | Prisma.Reset_tokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reset_tokens.
     */
    cursor?: Prisma.Reset_tokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reset_tokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reset_tokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reset_tokens.
     */
    distinct?: Prisma.Reset_tokenScalarFieldEnum | Prisma.Reset_tokenScalarFieldEnum[];
};
/**
 * Reset_token findFirstOrThrow
 */
export type Reset_tokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reset_token
     */
    select?: Prisma.Reset_tokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reset_token
     */
    omit?: Prisma.Reset_tokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Reset_tokenInclude<ExtArgs> | null;
    /**
     * Filter, which Reset_token to fetch.
     */
    where?: Prisma.Reset_tokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reset_tokens to fetch.
     */
    orderBy?: Prisma.Reset_tokenOrderByWithRelationInput | Prisma.Reset_tokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reset_tokens.
     */
    cursor?: Prisma.Reset_tokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reset_tokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reset_tokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reset_tokens.
     */
    distinct?: Prisma.Reset_tokenScalarFieldEnum | Prisma.Reset_tokenScalarFieldEnum[];
};
/**
 * Reset_token findMany
 */
export type Reset_tokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reset_token
     */
    select?: Prisma.Reset_tokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reset_token
     */
    omit?: Prisma.Reset_tokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Reset_tokenInclude<ExtArgs> | null;
    /**
     * Filter, which Reset_tokens to fetch.
     */
    where?: Prisma.Reset_tokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reset_tokens to fetch.
     */
    orderBy?: Prisma.Reset_tokenOrderByWithRelationInput | Prisma.Reset_tokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Reset_tokens.
     */
    cursor?: Prisma.Reset_tokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reset_tokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reset_tokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reset_tokens.
     */
    distinct?: Prisma.Reset_tokenScalarFieldEnum | Prisma.Reset_tokenScalarFieldEnum[];
};
/**
 * Reset_token create
 */
export type Reset_tokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reset_token
     */
    select?: Prisma.Reset_tokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reset_token
     */
    omit?: Prisma.Reset_tokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Reset_tokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a Reset_token.
     */
    data: Prisma.XOR<Prisma.Reset_tokenCreateInput, Prisma.Reset_tokenUncheckedCreateInput>;
};
/**
 * Reset_token createMany
 */
export type Reset_tokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reset_tokens.
     */
    data: Prisma.Reset_tokenCreateManyInput | Prisma.Reset_tokenCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Reset_token createManyAndReturn
 */
export type Reset_tokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reset_token
     */
    select?: Prisma.Reset_tokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Reset_token
     */
    omit?: Prisma.Reset_tokenOmit<ExtArgs> | null;
    /**
     * The data used to create many Reset_tokens.
     */
    data: Prisma.Reset_tokenCreateManyInput | Prisma.Reset_tokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Reset_tokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Reset_token update
 */
export type Reset_tokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reset_token
     */
    select?: Prisma.Reset_tokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reset_token
     */
    omit?: Prisma.Reset_tokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Reset_tokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a Reset_token.
     */
    data: Prisma.XOR<Prisma.Reset_tokenUpdateInput, Prisma.Reset_tokenUncheckedUpdateInput>;
    /**
     * Choose, which Reset_token to update.
     */
    where: Prisma.Reset_tokenWhereUniqueInput;
};
/**
 * Reset_token updateMany
 */
export type Reset_tokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Reset_tokens.
     */
    data: Prisma.XOR<Prisma.Reset_tokenUpdateManyMutationInput, Prisma.Reset_tokenUncheckedUpdateManyInput>;
    /**
     * Filter which Reset_tokens to update
     */
    where?: Prisma.Reset_tokenWhereInput;
    /**
     * Limit how many Reset_tokens to update.
     */
    limit?: number;
};
/**
 * Reset_token updateManyAndReturn
 */
export type Reset_tokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reset_token
     */
    select?: Prisma.Reset_tokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Reset_token
     */
    omit?: Prisma.Reset_tokenOmit<ExtArgs> | null;
    /**
     * The data used to update Reset_tokens.
     */
    data: Prisma.XOR<Prisma.Reset_tokenUpdateManyMutationInput, Prisma.Reset_tokenUncheckedUpdateManyInput>;
    /**
     * Filter which Reset_tokens to update
     */
    where?: Prisma.Reset_tokenWhereInput;
    /**
     * Limit how many Reset_tokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Reset_tokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Reset_token upsert
 */
export type Reset_tokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reset_token
     */
    select?: Prisma.Reset_tokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reset_token
     */
    omit?: Prisma.Reset_tokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Reset_tokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the Reset_token to update in case it exists.
     */
    where: Prisma.Reset_tokenWhereUniqueInput;
    /**
     * In case the Reset_token found by the `where` argument doesn't exist, create a new Reset_token with this data.
     */
    create: Prisma.XOR<Prisma.Reset_tokenCreateInput, Prisma.Reset_tokenUncheckedCreateInput>;
    /**
     * In case the Reset_token was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Reset_tokenUpdateInput, Prisma.Reset_tokenUncheckedUpdateInput>;
};
/**
 * Reset_token delete
 */
export type Reset_tokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reset_token
     */
    select?: Prisma.Reset_tokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reset_token
     */
    omit?: Prisma.Reset_tokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Reset_tokenInclude<ExtArgs> | null;
    /**
     * Filter which Reset_token to delete.
     */
    where: Prisma.Reset_tokenWhereUniqueInput;
};
/**
 * Reset_token deleteMany
 */
export type Reset_tokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Reset_tokens to delete
     */
    where?: Prisma.Reset_tokenWhereInput;
    /**
     * Limit how many Reset_tokens to delete.
     */
    limit?: number;
};
/**
 * Reset_token without action
 */
export type Reset_tokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reset_token
     */
    select?: Prisma.Reset_tokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reset_token
     */
    omit?: Prisma.Reset_tokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Reset_tokenInclude<ExtArgs> | null;
};
//# sourceMappingURL=Reset_token.d.ts.map