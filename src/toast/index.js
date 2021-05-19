import { toast } from 'react-toastify';
toast.configure();

export const toast_maker = (_type, _message) => {
    switch (_type)
    {
        case 1: // error
            toast.error(_message);
        break;

        case 2: // success
            toast.success(_message);
        break;
        case 3: // info
            toast.info(_message);
        break;

        case 4: // warning
            toast.warning(_message);
        break;
        default:
            toast.default(_message);
    }
}