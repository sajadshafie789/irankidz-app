
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'left',
  },

  select: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },

  selectedText: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
    textAlign: 'left',
  },

  placeholderText: {
    color: '#9CA3AF',
  },

  arrow: {
    fontSize: 22,
    color: '#6B7280',
    marginLeft: 10,
  },

  selectError: {
    borderColor: '#DC2626',
  },

  disabled: {
    opacity: 0.5,
    backgroundColor: '#F3F4F6',
  },

  errorText: {
    fontSize: 12,
    color: '#DC2626',
    marginTop: 5,
    textAlign: 'left',
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },

  modalContent: {
    width: '100%',
    maxWidth: 440,
    maxHeight: '75%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    elevation: 8,
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  modalTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'left',
  },

  closeButton: {
    fontSize: 28,
    color: '#6B7280',
    paddingHorizontal: 6,
  },

  searchInput: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#111827',
    marginBottom: 10,
    textAlign: 'left',
  },

  list: {
    flexGrow: 0,
    flexShrink: 1,
  },

  option: {
    minHeight: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
  },

  selectedOption: {
    backgroundColor: '#EFF6FF',
  },

  optionText: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
    textAlign: 'left',
  },

  selectedOptionText: {
    color: '#2563EB',
    fontWeight: '600',
  },

  checkmark: {
    fontSize: 16,
    color: '#2563EB',
    marginLeft: 8,
  },

  emptyText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    paddingVertical: 24,
  },
});
