import { baseApi } from '../api/baseApi';

const messageApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getConversations: builder.query({
			query: (userId) => ({
				url: `/conversations/${userId}`,
			}),
			providesTags: ['message'],
		}),
		getMessages: builder.query({
			query: (conversationId) => ({
				url: `/messages/conversation/${conversationId}`,
			}),
			providesTags: ['message'],
		}),
		sendMessage: builder.mutation({
			query: (newMessage) => ({
				url: `/messages/send/${newMessage.conversation}`,
				method: 'POST',
				body: newMessage,
			}),
			invalidatesTags: ['message'],
		}),
	}),
});

export const { useGetConversationsQuery, useGetMessagesQuery, useSendMessageMutation } = messageApi;
