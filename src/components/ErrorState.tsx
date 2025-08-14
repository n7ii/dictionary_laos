import React from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ 
  message = "ບໍ່ພົບຄຳສັບ", 
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6">
      <div className="relative">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <AlertCircle size={32} className="text-red-500" />
        </div>
      </div>
      
      <div className="text-center space-y-2 max-w-md">
        <h3 className="text-lg font-semibold text-slate-700">
          {message}
        </h3>
        <p className="text-slate-500">
          ບໍ່ສາມາດຊອກຫາຄຳສັບທີ່ທ່ານຕ້ອງການໄດ້ໃນວັດຈະນານຸກົມຂອງພວກເຮົາ. 
          ກະລຸນາກວດສອບການສະກົດຄຳແລ້ວລອງໃໝ່ອີກຄັ້ງ.
        </p>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 
                   text-white px-6 py-3 rounded-full transition-all duration-200 
                   hover:shadow-lg transform hover:scale-105 font-medium"
        >
          <RotateCcw size={18} />
          <span>ລອງໃໝ່</span>
        </button>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md">
        <h4 className="text-sm font-medium text-blue-800 mb-2">ຄຳແນະນຳ:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• ກວດສອບການສະກົດຄຳ</li>
          <li>• ລອງໃຊ້ຄຳງ່າຍໆ</li>
          <li>• ໃຊ້ຮູບແບບເອກພົດ</li>
          <li>• ລອງຄົ້ນຫາຄຳພ້ອງ</li>
        </ul>
      </div>
    </div>
  );
};