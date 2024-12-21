import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import { Task } from '../types/task';

interface WeightDetailsProps {
  task: Task;
  isStarted: boolean;
  onWeightUpdate?: (taskId: string, newWeight: number) => void;
}

export const WeightDetails: React.FC<WeightDetailsProps> = ({
  task,
  isStarted,
  onWeightUpdate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newWeight, setNewWeight] = useState(task.actualWeight || task.estimatedWeight);

  const handleWeightUpdate = () => {
    if (onWeightUpdate) {
      onWeightUpdate(task.id, newWeight);
    }
    setIsEditing(false);
  };

  const weightDifference = task.actualWeight && task.actualWeight !== task.estimatedWeight
    ? ((task.actualWeight - task.estimatedWeight) / task.estimatedWeight * 100).toFixed(1)
    : null;

  return (
    <div className="space-y-3">
      <h4 className="font-medium text-gray-700 flex items-center gap-2">
        <Scale className="w-5 h-5" />
        Weight Details
      </h4>
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-600">Estimated Weight</div>
            <div className="font-medium text-lg">{task.estimatedWeight} kg</div>
          </div>
          
          {isStarted && (
            <div>
              <div className="text-sm text-gray-600">Actual Weight</div>
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      type="number"
                      value={newWeight}
                      onChange={(e) => setNewWeight(Number(e.target.value))}
                      className="w-full px-3 py-2 border rounded-lg pr-12"
                      step="0.1"
                      min="0"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                      kg
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleWeightUpdate}
                      className="px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-3 py-1.5 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-lg">
                    {task.actualWeight || task.estimatedWeight} kg
                  </span>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {weightDifference && (
          <div className={`mt-3 p-2 rounded-lg text-sm ${
            Number(weightDifference) > 0 
              ? 'bg-red-50 text-red-700'
              : 'bg-green-50 text-green-700'
          }`}>
            Weight {Number(weightDifference) > 0 ? 'increased' : 'decreased'} by {Math.abs(Number(weightDifference))}%
          </div>
        )}
      </div>
    </div>
  );
};