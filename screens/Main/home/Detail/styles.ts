import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils/themes';

export const styles = StyleSheet.create({
  // Main list
  flatList: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContent: {
    paddingBottom: 24,
  },

  // Header
  headerWrapper: {
    paddingHorizontal: 8,
    backgroundColor: colors.white,
  },

  // Loading
  loadingContainer: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Product banner

  bannerSubtitle: {
    color: colors.textSecondary,
  },

  // Product information
  productContent: {
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    marginTop: 24,
  },
  imageWrapper: {
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productTitle: {
    marginBottom: 12,
  },
  productSubtitle: {
    marginBottom: 12,
  },
  productPrice: {
    marginBottom: 12,
  },

  // Add to cart and quantity
  purchaseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  addToCartButton: {
    width: '50%',
  },
  counterWrapper: {
    width: '40%',
    marginLeft: 8,
  },

  // Favorite and compare actions
  actionRow: {
    flexDirection: 'row',
    marginBottom: 36,
  },
  actionButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 100,
    width: 40,
    height: 40,
    marginRight: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 40,
    marginTop: 12,
  },
  listContainer: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
  },
  containerCard: {
    width: 265,
    height: 350,
    borderRightWidth: 1,
    borderColor: colors.border,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  // Product attributes
  stockContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
  },

  // Similar products
  similarSection: {
    marginTop: 60,
    padding: 8,
  },
  similarTitle: {
    marginBottom: 12,
  },

  // Empty state
  emptyContainer: {
    padding: 16,
  },
});
