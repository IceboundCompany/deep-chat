import { MessageFile } from '../../../../types/messageFile';
import { Messages } from '../messages';
import { Response } from '../../../../types/response';
import { Stream } from '../../../../types/stream';
import { MessagesBase } from '../messagesBase';
export declare class MessageStream {
    static readonly MESSAGE_CLASS = "streamed-message";
    private static readonly PARTIAL_RENDER_MARK;
    private readonly _partialRender?;
    private readonly _messages;
    private _fileAdded;
    private _streamType;
    private _elements?;
    private _hasStreamEnded;
    private _activeMessageRole?;
    private _message?;
    private _endStreamAfterOperation?;
    private _partialContent;
    private _partialBubble?;
    private _targetWrapper?;
    private _sessionId?;
    constructor(messages: MessagesBase, stream?: Stream);
    upsertStreamedMessage(response?: Response): void;
    private setInitialState;
    private setTargetWrapperIfNeeded;
    private updateBasedOnType;
    private updateText;
    private containsPartialRenderMark;
    private isNewPartialRenderParagraph;
    private partialRenderNewParagraph;
    private updatePartialRenderBubble;
    private updateHTML;
    finaliseStreamedMessage(hasStreamEnded?: boolean): void;
    markFileAdded(): void;
    endStreamAfterFileDownloaded(messages: Messages, downloadCb: () => Promise<{
        files?: MessageFile[];
        text?: string;
    }>): Promise<void>;
}
//# sourceMappingURL=messageStream.d.ts.map