"use client";

type TaskModalProps = {
  task: string;
  onClose: () => void;
};

export default function TaskModal({
  task,
  onClose,
}: TaskModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      
      <div className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900 p-8 text-white shadow-2xl">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          
          <div>
            <h2 className="text-3xl font-bold">
              {task}
            </h2>

            <p className="mt-2 text-slate-400">
              Task Details
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-500"
          >
            Close
          </button>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="mb-2 block text-sm text-slate-400">
            Description
          </label>

          <textarea
            placeholder="Add task description..."
            className="h-32 w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          {/* Priority */}
          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Priority
            </label>

            <select className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Due Date
            </label>

            <input
              type="date"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none"
            />
          </div>

          {/* Assignee */}
          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Assigned To
            </label>

            <input
              type="text"
              placeholder="Enter assignee"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Status
            </label>

            <select className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none">
              <option>Todo</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        {/* Comments */}
        <div className="mt-8">
          
          <label className="mb-2 block text-sm text-slate-400">
            Comments
          </label>

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4">
            
            <div className="mb-4 rounded-xl bg-slate-900 p-3">
              <p className="font-medium">
                Vaishnavi
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Need to finalize dashboard layout.
              </p>
            </div>

            <input
              type="text"
              placeholder="Write a comment..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 outline-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end gap-4">
          
          <button className="rounded-xl bg-slate-700 px-5 py-3 hover:bg-slate-600">
            Cancel
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-500">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}