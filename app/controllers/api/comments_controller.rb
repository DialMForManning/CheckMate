class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(body: params[:body],
      author_id: current_user.id,
      expense_id: params[:expense_id])

    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update(body: params[:body])
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    current_user_id = current_user.id;
    @comments = Comment.select('comments.*, users.fname AS author').joins(expense: :debtors)
                  .where("payer_id = #{params[:friend_id].to_i} OR debtor_id = #{params[:friend_id].to_i}")
                  .where("payer_id = #{current_user_id} OR debtor_id = #{current_user_id}")
                  .order('comments.id')

    comments = Hash.new { |comment, expense_id| comments[expense_id] = [] }

    @comments.each do |comment|
      comments[comment.expense_id].push(comment)
    end

    render json: comments
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render 'api/comments/show'
  end
end
