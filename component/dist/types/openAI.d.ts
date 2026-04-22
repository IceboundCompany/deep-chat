import { OpenAIRealtime } from './openAIRealtime';
import { OpenAITool } from './openAITools';
export type OpenAICompletions = {
    system_prompt?: string;
    model?: string;
    max_tokens?: number;
    temperature?: number;
    top_p?: number;
    modalities?: ['text', 'audio'];
    audio?: {
        format: string;
        voice: string;
    };
} & OpenAIChatFunctions;
export type OpenAITextToSpeech = {
    model?: string;
    voice?: string;
    speed?: number;
};
export type OpenAISpeechToText = {
    model?: string;
    temperature?: number;
    language?: string;
    type?: 'transcription' | 'translation';
};
export interface OpenAIImagesDalle2 {
    model?: 'dall-e-2';
    n?: number;
    size?: '256x256' | '512x512' | '1024x1024';
    response_format?: 'url' | 'b64_json';
    user?: string;
}
export interface OpenAIImagesDalle3 {
    model: 'dall-e-3';
    quality?: string;
    size?: '1024x1024' | '1792x1024' | '1024x1792';
    style?: 'vivid' | 'natural';
    response_format?: 'url' | 'b64_json';
    user?: string;
}
export type FunctionsDetails = {
    name: string;
    arguments: string;
}[];
export type AssistantFunctionHandlerResponse = string[] | Promise<string>[] | Promise<string[]> | Promise<Promise<string>[]>;
export type AssistantFunctionHandler = (functionsDetails: FunctionsDetails) => AssistantFunctionHandlerResponse;
export interface OpenAINewAssistant {
    model?: string;
    name?: string;
    description?: string;
    instructions?: string;
    tools?: {
        type: 'code_interpreter' | 'file_search' | 'function';
        function?: {
            name: string;
            description?: string;
            parameters?: object;
        };
    }[];
    tool_resources?: {
        code_interpreter?: {
            file_ids: string[];
        };
        file_search?: {
            vector_store_ids?: string[];
            vector_stores: {
                file_ids: string[];
            };
        };
    };
}
export type FileToolType = 'code_interpreter' | 'file_search' | 'images';
export interface OpenAIAssistant {
    assistant_id?: string;
    thread_id?: string;
    load_thread_history?: boolean;
    new_assistant?: OpenAINewAssistant;
    files_tool_type?: FileToolType | ((fileNames: string[]) => FileToolType);
    function_handler?: AssistantFunctionHandler;
    custom_base_url?: string;
}
export type ChatFunctionHandlerResponse = {
    response: string;
}[] | {
    text: string;
};
export type ChatFunctionHandler = (functionsDetails: FunctionsDetails) => ChatFunctionHandlerResponse | Promise<ChatFunctionHandlerResponse> | Promise<{
    response: string;
}>[];
export interface OpenAIChatFunctions {
    tools?: OpenAITool[];
    max_tool_calls?: number;
    parallel_tool_calls?: boolean;
    tool_choice?: 'auto' | 'required' | 'none' | {
        mode: 'auto' | 'required';
        type: 'allowed_tools';
        tools: OpenAITool[];
    } | {
        type: string;
        name?: string;
        server_label?: string;
    };
    function_handler?: ChatFunctionHandler;
}
export type OpenAIChat = {
    model?: string;
    instructions?: string;
    background?: boolean;
    max_output_tokens?: number;
    reasoning?: {
        effort?: string;
        summary?: string;
    };
    safety_identifier?: string;
    service_tier?: string;
    store?: boolean;
    temperature?: number;
    top_p?: number;
    truncation?: string;
    conversation?: boolean | string;
    conversationLoadLimit?: number;
    custom_base_url?: string;
} & OpenAIChatFunctions;
export interface OpenAI {
    chat?: true | OpenAIChat;
    assistant?: true | OpenAIAssistant;
    realtime?: true | OpenAIRealtime;
    completions?: true | OpenAICompletions;
    images?: true | OpenAIImagesDalle2 | OpenAIImagesDalle3;
    textToSpeech?: true | OpenAITextToSpeech;
    speechToText?: true | OpenAISpeechToText;
}
//# sourceMappingURL=openAI.d.ts.map