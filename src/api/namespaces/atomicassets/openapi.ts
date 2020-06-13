export function generateOfferSchema(assetSchema: string): any {
    return {
        type: 'object',
        properties: {
            contract: {type: 'string'},
            offer_id: {type: 'string'},
            sender_name: {type: 'string'},
            recipient_name: {type: 'string'},
            memo: {type: 'string'},
            state: {type: 'integer'},

            is_sender_contract: {type: 'boolean'},
            is_recipient_contract: {type: 'boolean'},
            sender_assets: {type: 'array', items: {'$ref': '#/components/schemas/' + assetSchema}},
            recipient_assets: {type: 'array', items: {'$ref': '#/components/schemas/' + assetSchema}},

            updated_at_block: {type: 'integer'},
            updated_at_time: {type: 'integer'},
            created_at_block: {type: 'integer'},
            created_at_time: {type: 'integer'}
        }
    };
}

export function generateTransferSchema(assetSchema: string): any {
    return {
        type: 'object',
        properties: {
            contract: {type: 'string'},
            sender_name: {type: 'string'},
            recipient_name: {type: 'string'},
            memo: {type: 'string'},

            assets: {type: 'array', items: {'$ref': '#/components/schemas/' + assetSchema}},

            created_at_block: {type: 'integer'},
            created_at_time: {type: 'integer'}
        }
    };
}

export const atomicassetsComponents = {
    'Asset': {
        type: 'object',
        properties: {
            contract: {type: 'string'},
            asset_id: {type: 'integer'},
            owner: {type: 'string'},
            name: {type: 'string'},
            is_transferable: {type: 'boolean'},
            is_burnable: {type: 'boolean'},
            collection: {
                type: 'object',
                properties: {
                    collection_name: {type: 'string'},
                    name: {type: 'string'},
                    author: {type: 'string'},
                    allow_notify: {type: 'boolean'},
                    authorized_accounts: {type: 'array', items: {type: 'string'}},
                    notify_accounts: {type: 'array', items: {type: 'string'}},
                    market_fee: {type: 'boolean'},
                    created_at_block: {type: 'integer'},
                    created_at_time: {type: 'integer'}
                }
            },
            schema: {
                type: 'object',
                properties: {
                    schema_name: {type: 'string'},
                    format: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                name: {type: 'string'},
                                type: {type: 'string'}
                            }
                        }
                    },
                    created_at_block: {type: 'integer'},
                    created_at_time: {type: 'integer'}
                }
            },
            template: {
                type: 'object',
                properties: {
                    template_id: {type: 'integer'},
                    max_supply: {type: 'integer'},
                    issued_supply: {type: 'integer'},
                    is_transferable: {type: 'boolean'},
                    is_burnable: {type: 'boolean'},

                    immutable_data: {type: 'object'},

                    created_at_time: {type: 'integer'},
                    created_at_block: {type: 'integer'}
                }
            },

            backed_tokens: {
                type: 'array', items: {
                    type: 'object',
                    properties: {
                        token_contract: {type: 'string'},
                        token_symbol: {type: 'string'},
                        token_precision: {type: 'integer'},
                        amount: {type: 'integer'}
                    }
                }
            },

            immutable_data: {type: 'object'},
            mutable_data: {type: 'object'},
            data: {type: 'object'},

            burned_at_block: {type: 'integer'},
            burned_at_time: {type: 'integer'},
            updated_at_block: {type: 'integer'},
            updated_at_time: {type: 'integer'},
            minted_at_block: {type: 'integer'},
            minted_at_time: {type: 'integer'}
        }
    },
    'Collection': {
        type: 'object',
        properties: {
            contract: {type: 'string'},
            collection_name: {type: 'string'},
            name: {type: 'string'},
            author: {type: 'string'},
            allow_notify: {type: 'boolean'},
            authorized_accounts: {type: 'array', items: {type: 'string'}},
            notify_accounts: {type: 'array', items: {type: 'string'}},
            market_fee: {type: 'number'},

            data: {type: 'object'},

            created_at_block: {type: 'integer'},
            created_at_time: {type: 'integer'}
        }
    },
    'Schema': {
        type: 'object',
        properties: {
            contract: {type: 'string'},
            schema_name: {type: 'string'},
            format: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        name: {type: 'string'},
                        type: {type: 'string'}
                    }
                }
            },
            created_at_block: {type: 'integer'},
            created_at_time: {type: 'integer'},
            collection: {
                type: 'object',
                properties: {
                    collection_name: {type: 'string'},
                    name: {type: 'string'},
                    author: {type: 'string'},
                    allow_notify: {type: 'boolean'},
                    authorized_accounts: {type: 'array', items: {type: 'string'}},
                    notify_accounts: {type: 'array', items: {type: 'string'}},
                    market_fee: {type: 'boolean'},

                    created_at_block: {type: 'integer'},
                    created_at_time: {type: 'integer'}
                }
            }
        }
    },
    'Template': {
        type: 'object',
        properties: {
            contract: {type: 'string'},
            template_id: {type: 'integer'},
            max_supply: {type: 'integer'},
            issued_supply: {type: 'integer'},
            is_transferable: {type: 'boolean'},
            is_burnable: {type: 'boolean'},

            immutable_data: {type: 'object'},

            created_at_time: {type: 'integer'},
            created_at_block: {type: 'integer'},

            scheme: {
                type: 'object',
                properties: {
                    schema_name: {type: 'string'},
                    format: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                name: {type: 'string'},
                                type: {type: 'string'}
                            }
                        }
                    },
                    created_at_block: {type: 'integer'},
                    created_at_time: {type: 'integer'}
                }
            },
            collection: {
                type: 'object',
                properties: {
                    collection_name: {type: 'string'},
                    name: {type: 'string'},
                    author: {type: 'string'},
                    allow_notify: {type: 'boolean'},
                    authorized_accounts: {type: 'array', items: {type: 'string'}},
                    notify_accounts: {type: 'array', items: {type: 'string'}},
                    market_fee: {type: 'boolean'},

                    created_at_block: {type: 'integer'},
                    created_at_time: {type: 'integer'}
                }
            }
        }
    },
    'Offer': generateOfferSchema('Asset'),
    'Transfer': generateTransferSchema('Asset'),
    'Log': {
        type: 'object',
        properties: {
            log_id: {type: 'integer'},
            name: {type: 'string'},
            data: {type: 'object'},
            txid: {type: 'string'},
            created_at_block: {type: 'integer'},
            created_at_time: {type: 'integer'}
        }
    }
};

export const assetFilterParameters = [
    {
        name: 'owner',
        in: 'query',
        description: 'Get assets owned by the account',
        required: false,
        schema: {type: 'string'}
    },
    {
        name: 'collection_name',
        in: 'query',
        description: 'Get all assets within the collection',
        required: false,
        schema: {type: 'string'}
    },
    {
        name: 'schema_name',
        in: 'query',
        description: 'Get all assets which use that schema',
        required: false,
        schema: {type: 'string'}
    },
    {
        name: 'template_id',
        in: 'query',
        description: 'Get all assets implement the template',
        required: false,
        schema: {type: 'integer'}
    },
    {
        name: 'match',
        in: 'query',
        description: 'Search for input in asset name',
        required: false,
        schema: {type: 'string'}
    }
];