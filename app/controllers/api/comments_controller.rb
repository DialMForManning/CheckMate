class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(body: comment_params[:body],
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

    if @comment.update(comment_params)
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.joins(expense: :debtors)
                  .where("payer_id = #{params[:friend_id].to_i} OR debtor_id = #{params[:friend_id].to_i}")
                  .where("payer_id = #{current_user.id} OR debtor_id = #{current_user.id}")

    render 'api/comments/index'
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render 'api/comments/show'
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
